function VoteForm() {
  return (
    <section id="input-section">

      <h2 className="h2input">
        أضف تقييمك
      </h2>

      <input
        type="text"
        id="name"
        placeholder="الاسم الكامل"
        required
      />

      <input
        type="email"
        id="email"
        placeholder="لإميل الخاص بك"
        required
      />

      <select id="party">
        <option value="حزب الاستقلال">حزب الاستقلال</option>
        <option value="التجمع الوطني للأحرار">التجمع الوطني للأحرار</option>
        <option value="حزب الأصالة والمعاصرة">حزب الأصالة والمعاصرة</option>
        <option value="حزب العدالة والتنمية">حزب العدالة والتنمية</option>
        <option value="الاتحاد الاشتراكي للقوات الشعبية">
          الاتحاد الاشتراكي للقوات الشعبية
        </option>
        <option value="الحركة الشعبية">الحركة الشعبية</option>
        <option value="حزب التقدم والاشتراكية">
          حزب التقدم والاشتراكية
        </option>
        <option value="الاتحاد الدستوري">الاتحاد الدستوري</option>
        <option value="جبهة القوى الديمقراطية">
          جبهة القوى الديمقراطية
        </option>
        <option value="الحركة الديمقراطية الاجتماعية">
          الحركة الديمقراطية الاجتماعية
        </option>
      </select>

      <select id="region">
        <option>جهة طنجة تطوان الحسيمة</option>
        <option>جهة الشرق</option>
        <option>جهة فاس مكناس</option>
        <option>جهة الرباط سلا القنيطرة</option>
        <option>جهة بني ملال خنيفرة</option>
        <option>جهة الدار البيضاء سطات</option>
        <option>جهة مراكش آسفي</option>
        <option>جهة درعة تافيلالت</option>
        <option>جهة سوس ماسة</option>
        <option>جهة كلميم واد نون</option>
        <option>جهة العيون الساقية الحمراء</option>
        <option>جهة الداخلة وادي الذهب</option>
      </select>

      <input
        type="number"
        id="score"
        min="1"
        max="10"
        placeholder="أدخل تقييمك من 1 إلى 10"
        required
      />

      <button type="button">
        إرسال
      </button>

    </section>
  );
}

export default VoteForm;