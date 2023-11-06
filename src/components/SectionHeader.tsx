import './SectionHeader.scss'

export default function SectionHeader({ title, color }: { title: string, color: string }) {
  return (
    <h3 className={`section-header ${color}`}>
      <span>{title}</span>
      <span></span>
    </h3>
  );
}