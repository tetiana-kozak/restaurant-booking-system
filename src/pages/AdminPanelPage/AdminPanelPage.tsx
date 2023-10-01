import PageTitleSection from 'components/Titles/PageTitleSection'

type Props = {}
const AdminPanelPage = (props: Props) => {
  return (
    <>
      <PageTitleSection>Адміністратор</PageTitleSection>
      <div className="mt-[32px]">
        <h2>Таблиця закладів</h2>
      </div>
    </>
  )
}
export default AdminPanelPage
