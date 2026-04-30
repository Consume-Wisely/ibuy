import { TopBanner } from "../components/shared/TopBanner/TopBanner"

export const SalutePage = () => {
  return (
    <div className="app-page">
      <TopBanner /><hr/>
      בהמשך יוצג פה מידע על:
      <div>עסקים שנפגעו מסיבות דת למשל כי הם פתוחים בשבת</div>
      <div>עסקים שתומכים בבעלי מוגבלויות למשל מעסיקים אותם</div>
      <div>עסקים נוספים שתורמים לתיקון עולם</div>
    </div>
  )
}
