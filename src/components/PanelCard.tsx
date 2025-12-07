interface PanelCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function PanelCard({ title, description, children }: PanelCardProps) {
  return (
    <div className="bg-white border border-[var(--color-muted)] rounded p-4">
      <div className="mb-3">
        <p className="text-sm text-[var(--color-foreground)] mb-0.5" style={{ fontFamily: 'var(--font-body)', fontWeight: 'var(--font-weight-semibold)' }}>
          {title}
        </p>
        <p className="text-xs text-[#576575]" style={{ fontFamily: 'var(--font-body)' }}>
          {description}
        </p>
      </div>
      
      <div className="mt-2">
        {children}
      </div>
    </div>
  );
}
