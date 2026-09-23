interface LocationMapProps {
  city: string;
  state?: string;
  zoom?: number;
}

export default function LocationMap({ city, state = 'FL', zoom = 13 }: LocationMapProps) {
  const query = `${city.replace(/ /g, '+')},+${state}`;
  const src = `https://maps.google.com/maps?q=${query}&z=${zoom}&output=embed`;

  return (
    <div className="overflow-hidden rounded-lg card-professional">
      <iframe
        title={`Map of ${city}, ${state}`}
        src={src}
        width="100%"
        height={350}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        style={{
          width: '100%',
          height: '350px',
          border: 'none',
          borderRadius: '8px',
          display: 'block',
        }}
      />
    </div>
  );
}
