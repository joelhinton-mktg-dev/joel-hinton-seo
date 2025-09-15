# Form Testing Suite

This directory contains Playwright end-to-end tests for form functionality across the Joel Hinton Marketing website.

## Test Coverage

### 5 Representative Pages Tested:

1. **Index.tsx (Homepage)**
   - Hero Section Form (mjkejnko endpoint)
   - ContactDialog Form (xrbarnbp endpoint)

2. **HealthcareMarketing.tsx**
   - ContactDialog with industry-specific business types (businessTypes.healthcare)

3. **About.tsx**
   - Custom contact form (no Formspree integration)

4. **LocalSEO.tsx**
   - Hybrid page with both ContactDialog and custom forms

5. **Contact.tsx**
   - Standard ContactDialog with general business types

## Test Scenarios

### For Each Page:
- ✅ Form validation testing (empty fields, invalid email)
- ✅ Successful form submission with test email (hintonjoel@gmail.com)
- ✅ Success message verification
- ✅ Modal open/close behavior (for ContactDialog pages)
- ✅ Business type dropdown validation (industry-specific vs general)

### Formspree Endpoints Tested:
- **mjkejnko**: Hero section forms
- **xrbarnbp**: ContactDialog forms

### Error Handling:
- ✅ Form validation errors display correctly
- ✅ Network error handling for failed submissions
- ✅ Success message timing and modal closure

## Running the Tests

### Prerequisites:
```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

**Note**: Tests run against the live Netlify deployment at https://admirable-blini-e3d47a.netlify.app - no local development server required.

### Test Commands:

```bash
# Run all tests
npm run test

# Run FIXED form tests (recommended)
npm run test:forms

# Run FIXED business type tests (recommended)
npm run test:business-types

# Run site health checks
npm run test:health

# Debug form elements and selectors
npm run test:debug

# Run tests with UI (visual test runner)
npm run test:ui

# Run tests in headed mode (see browser)
npm run test:headed

# Run form tests in headed mode
npm run test:forms:headed

# Debug form tests in headed mode
npm run test:debug

# Run old/original tests (may have issues)
npm run test:forms:old
npm run test:business-types:old
```

### Test Configuration:

- **Base URL**: https://admirable-blini-e3d47a.netlify.app (Live Netlify deployment)
- **Browsers**: Chrome, Firefox, Safari, Mobile Chrome, Mobile Safari
- **Timeouts**: 60s global, 15s actions, 30s navigation
- **Retries**: 2 on CI, 1 locally
- **Screenshots**: On failure only
- **Videos**: Retained on failure
- **Trace**: On first retry

## 🔧 **FIXES IMPLEMENTED**

### **Issues Resolved:**
1. ✅ **Business Type Dropdown Selection** - Fixed Radix UI Select interaction
2. ✅ **Message Field Validation** - Ensured 10+ character requirement
3. ✅ **Timeout Issues** - Extended timeouts to 60s global, 15s actions
4. ✅ **Safari Fast Completion** - Added proper waiting for elements
5. ✅ **Error Logging** - Added comprehensive console logging

### **Key Improvements:**
- **Proper Radix Select Handling**: Uses `[role="combobox"]` and `[role="option"]` selectors
- **Enhanced Form Filling**: Validates all fields are filled before submission
- **Better Error Detection**: Multiple selector strategies for validation messages  
- **Network Idle Waiting**: Ensures pages fully load before interaction
- **Comprehensive Logging**: Console output for debugging test execution

### **New Test Files:**
- `tests/forms-fixed.spec.ts` - Fixed version of main form tests
- `tests/business-types-fixed.spec.ts` - Fixed business type configuration tests
- `tests/debug-forms.spec.ts` - Debugging utility for form element discovery

## Test Data

**Email for delivery verification**: hintonjoel@gmail.com
**Business Types Tested**:
- General: professional-services
- Healthcare: medical-practice

## Form Implementation Details

### ContactDialog Pattern:
```tsx
<ContactDialog 
  isOpen={isOpen}
  onClose={closeDialog}
  title="Page-specific title"
  description="Page-specific description"
  defaultService={selectedService}
  businessTypes={businessTypes.industry}
/>
```

### Hero Form Pattern:
```tsx
// Uses HeroSection component with mjkejnko endpoint
// Custom form implementation with useForm hook
```

### Business Type Configurations:
- **General**: 10 business type options (catch-all)
- **Healthcare**: 9 specialized healthcare options
- **Real Estate**: 9 real estate specific options
- **SaaS**: 9 technology/SaaS options
- And 9 other industry-specific configurations

## Debugging Tests

### View Test Results:
```bash
# Generate and open HTML report
npx playwright show-report
```

### Debug Failed Tests:
```bash
# Run in debug mode
npx playwright test --debug

# Run specific test in debug mode
npx playwright test tests/forms.spec.ts --debug
```

### Trace Viewer:
```bash
# View test traces for failed tests
npx playwright show-trace trace.zip
```

## CI/CD Integration

Tests are configured to run in CI with:
- Parallel execution disabled for CI stability
- 2 retries on failure
- Screenshot and video capture on failure
- Tests run against live Netlify deployment (no server startup required)

## Mock Endpoints

Tests mock Formspree endpoints to avoid:
- Spam submissions during testing
- Rate limiting issues
- Dependency on external services

Real endpoint testing should be done manually with the test email address provided.