// Latar bergerak: gradasi lembut yang melayang pelan. Murni CSS (transform), berhenti kalau "kurangi gerakan" aktif.
export default function Backdrop() {
  return (
    <div className="backdrop" aria-hidden="true">
      <i className="b1" /><i className="b2" /><i className="b3" /><i className="b4" />
      <span className="ring r1" /><span className="ring r2" />
    </div>
  );
}
