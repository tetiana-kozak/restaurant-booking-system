import AllRestaurantsTable from 'components/AllRestaurantsTable/AllRestaurantsTable'
import PageTitleSection from 'components/Titles/PageTitleSection'

type Props = {}
const AdminPanelPage = (props: Props) => {
  return (
    <>
      <PageTitleSection>Адміністратор</PageTitleSection>
      <div className="mt-[32px]">
        <h2 className="mb-[32px]">Таблиця закладів</h2>
        <AllRestaurantsTable />
      </div>
    </>
  )
}
export default AdminPanelPage
