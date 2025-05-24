import './index.css'

const Pagination = ({prevPages, page, nextPage}) => (
  <>
    <button type="button" onClick={() => prevPages()} className="page-btn">
      Prev
    </button>

    <p className="page-text">{page}</p>

    <button type="button" onClick={() => nextPage()} className="page-btn">
      Next
    </button>
  </>
)
export default Pagination
