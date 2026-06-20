function Participants() {
  return (
    <section id="data-section">

      <h2 className="hparty">
        آخر المشاركين في الاستطلاع
      </h2>

      <div className="participants-header">
        <div>الإسم</div>
        <div>الحزب</div>
        <div>التقييم</div>
      </div>

      <div id="participants-list"></div>

    </section>
  );
}

export default Participants;