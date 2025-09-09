#!/usr/bin/env node

/**
 * Comprehensive Form Testing Script
 * Tests all form implementations across the website
 */

import fs from 'fs';
import path from 'path';

// Form endpoints configuration
const FORMSPREE_ENDPOINTS = {
  hero: 'https://formspree.io/f/mjkejnko',
  contact: 'https://formspree.io/f/xrbarnbp'
};

// Test data for form submissions
const TEST_DATA = {
  name: 'Test User',
  email: 'test@example.com',
  phone: '5551234567',
  businessType: 'professional-services',
  selectedService: 'Test Service',
  marketingChallenge: 'This is a test marketing challenge description for automated testing.'
};

// Pages with forms and their expected configurations
const FORM_PAGES = {
  'ContactDialog Pages (Formspree Integrated)': [
    {
      file: 'src/pages/Pricing.tsx',
      businessTypes: 'businessTypes.general',
      endpoint: 'xrbarnbp',
      status: 'INTEGRATED'
    },
    {
      file: 'src/pages/SEOServices.tsx', 
      businessTypes: 'businessTypes.general',
      endpoint: 'xrbarnbp',
      status: 'INTEGRATED'
    },
    {
      file: 'src/pages/Contact.tsx',
      businessTypes: 'businessTypes.general', 
      endpoint: 'xrbarnbp',
      status: 'INTEGRATED'
    },
    {
      file: 'src/pages/ProfessionalServicesMarketing.tsx',
      businessTypes: 'businessTypes.professional',
      endpoint: 'xrbarnbp',
      status: 'INTEGRATED'
    },
    {
      file: 'src/pages/HealthcareMarketing.tsx',
      businessTypes: 'businessTypes.healthcare',
      endpoint: 'xrbarnbp', 
      status: 'INTEGRATED'
    },
    {
      file: 'src/pages/RealEstateMarketing.tsx',
      businessTypes: 'businessTypes.realEstate',
      endpoint: 'xrbarnbp',
      status: 'INTEGRATED'
    },
    {
      file: 'src/pages/HomeServicesMarketing.tsx',
      businessTypes: 'businessTypes.homeServices',
      endpoint: 'xrbarnbp',
      status: 'INTEGRATED' 
    },
    {
      file: 'src/pages/EcommerceMarketing.tsx',
      businessTypes: 'businessTypes.ecommerce',
      endpoint: 'xrbarnbp',
      status: 'INTEGRATED'
    },
    {
      file: 'src/pages/AutomotiveServicesMarketing.tsx',
      businessTypes: 'businessTypes.automotive',
      endpoint: 'xrbarnbp',
      status: 'INTEGRATED'
    },
    {
      file: 'src/pages/EducationTrainingMarketing.tsx',
      businessTypes: 'businessTypes.education',
      endpoint: 'xrbarnbp',
      status: 'INTEGRATED'
    },
    {
      file: 'src/pages/FitnessWellnessMarketing.tsx',
      businessTypes: 'businessTypes.fitness',
      endpoint: 'xrbarnbp',
      status: 'INTEGRATED'
    },
    {
      file: 'src/pages/FinancialServicesMarketing.tsx',
      businessTypes: 'businessTypes.financial',
      endpoint: 'xrbarnbp',
      status: 'INTEGRATED'
    }
  ],
  'Hero Form (Formspree Integrated)': [
    {
      file: 'src/components/HeroSection.tsx',
      businessTypes: 'hardcoded options',
      endpoint: 'mjkejnko',
      status: 'INTEGRATED'
    }
  ],
  'Legacy Forms (NEED FIXING)': [
    {
      file: 'src/pages/SaaSMarketing.tsx',
      businessTypes: 'businessTypes.saas (MISSING)',
      endpoint: 'NONE - setTimeout mock',
      status: 'LEGACY'
    },
    {
      file: 'src/pages/LegalServicesMarketing.tsx', 
      businessTypes: 'businessTypes.legal (MISSING)',
      endpoint: 'NONE - setTimeout mock',
      status: 'LEGACY'
    },
    {
      file: 'src/pages/RestaurantsHospitalityMarketing.tsx',
      businessTypes: 'businessTypes.restaurant (MISSING)', 
      endpoint: 'NONE - setTimeout mock',
      status: 'LEGACY'
    }
  ]
};

/**
 * Test Formspree endpoint connectivity
 */
async function testFormspreeEndpoint(endpoint, testData) {
  try {
    console.log(`  Testing ${endpoint}...`);
    
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(testData)
    });
    
    if (response.ok) {
      console.log(`  ✅ ${endpoint} - WORKING`);
      return { success: true, status: response.status };
    } else {
      console.log(`  ❌ ${endpoint} - FAILED (${response.status})`);
      return { success: false, status: response.status, error: await response.text() };
    }
  } catch (error) {
    console.log(`  ❌ ${endpoint} - ERROR: ${error.message}`);
    return { success: false, error: error.message };
  }
}

/**
 * Verify file exists and contains expected patterns
 */
function verifyFormImplementation(filePath, expectedPatterns) {
  try {
    if (!fs.existsSync(filePath)) {
      return { exists: false, error: 'File not found' };
    }
    
    const content = fs.readFileSync(filePath, 'utf8');
    const results = {};
    
    for (const [pattern, description] of Object.entries(expectedPatterns)) {
      const regex = new RegExp(pattern);
      results[description] = regex.test(content);
    }
    
    return { exists: true, patterns: results };
  } catch (error) {
    return { exists: false, error: error.message };
  }
}

/**
 * Main testing function
 */
async function runFormAudit() {
  console.log('🔍 COMPREHENSIVE FORM AUDIT STARTING...\n');
  
  let totalPages = 0;
  let integratedPages = 0;
  let legacyPages = 0;
  const testResults = {};
  
  // Test Formspree endpoints
  console.log('📡 TESTING FORMSPREE ENDPOINTS:');
  const endpointResults = {};
  
  for (const [name, endpoint] of Object.entries(FORMSPREE_ENDPOINTS)) {
    const result = await testFormspreeEndpoint(endpoint, TEST_DATA);
    endpointResults[name] = result;
    if (result.success) {
      console.log(`  ✅ ${name}: ${endpoint} - WORKING`);
    } else {
      console.log(`  ❌ ${name}: ${endpoint} - FAILED`);
    }
  }
  
  console.log('\n📋 AUDITING FORM IMPLEMENTATIONS:\n');
  
  // Audit each category of pages
  for (const [category, pages] of Object.entries(FORM_PAGES)) {
    console.log(`${category}:`);
    testResults[category] = [];
    
    for (const page of pages) {
      totalPages++;
      console.log(`\n  📄 ${page.file}:`);
      console.log(`     Business Types: ${page.businessTypes}`);
      console.log(`     Endpoint: ${page.endpoint}`);
      console.log(`     Status: ${page.status}`);
      
      // Define patterns to look for based on status
      let expectedPatterns = {};
      
      if (page.status === 'INTEGRATED') {
        integratedPages++;
        if (page.file.includes('HeroSection')) {
          expectedPatterns = {
            'https://formspree\\.io/f/mjkejnko': 'Hero Formspree endpoint',
            'Content-Type.*application/json': 'JSON content type',
            'JSON\\.stringify': 'JSON serialization'
          };
        } else {
          expectedPatterns = {
            'ContactDialog': 'ContactDialog import/usage', 
            'useContactDialog': 'ContactDialog hook',
            [`${page.businessTypes}`]: 'Business types configuration'
          };
        }
      } else if (page.status === 'LEGACY') {
        legacyPages++;
        expectedPatterns = {
          'setTimeout': 'Mock implementation',
          'onSubmitForm': 'Form handler',
          'ContactDialog': 'ContactDialog usage (should be missing)'
        };
      }
      
      const verification = verifyFormImplementation(page.file, expectedPatterns);
      
      if (!verification.exists) {
        console.log(`     ❌ FILE NOT FOUND: ${verification.error}`);
      } else {
        console.log('     Implementation Check:');
        for (const [check, passed] of Object.entries(verification.patterns)) {
          console.log(`       ${passed ? '✅' : '❌'} ${check}`);
        }
      }
      
      testResults[category].push({
        file: page.file,
        status: page.status,
        verification: verification,
        businessTypes: page.businessTypes,
        endpoint: page.endpoint
      });
    }
    console.log('');
  }
  
  // Summary Report
  console.log('\n📊 AUDIT SUMMARY:');
  console.log(`Total Pages: ${totalPages}`);
  console.log(`Formspree Integrated: ${integratedPages} (${Math.round(integratedPages/totalPages*100)}%)`);
  console.log(`Legacy/Broken: ${legacyPages} (${Math.round(legacyPages/totalPages*100)}%)`);
  
  console.log('\n🚀 FORMSPREE ENDPOINT STATUS:');
  for (const [name, result] of Object.entries(endpointResults)) {
    console.log(`${result.success ? '✅' : '❌'} ${name}: ${result.success ? 'WORKING' : 'FAILED'}`);
  }
  
  console.log('\n🔧 RECOMMENDED ACTIONS:');
  if (legacyPages > 0) {
    console.log('❗ HIGH PRIORITY: Fix legacy form implementations:');
    for (const pages of Object.values(testResults)) {
      for (const page of pages) {
        if (page.status === 'LEGACY') {
          console.log(`   - ${page.file}: Replace with ContactDialog + ${page.businessTypes.replace(' (MISSING)', '')}`);
        }
      }
    }
  } else {
    console.log('✅ All forms are properly integrated with Formspree!');
  }
  
  console.log('\n✅ FORM AUDIT COMPLETE');
  
  return {
    totalPages,
    integratedPages, 
    legacyPages,
    endpointResults,
    testResults
  };
}

// Run the audit if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  runFormAudit().catch(console.error);
}

export { runFormAudit, FORM_PAGES, FORMSPREE_ENDPOINTS };