import './WorkStatus.css'

export default function WorkStatus({ loading, error, emptyMessage = 'No projects have been published yet.' }) {
  if (loading) {
    return (
      <div className="work-status" role="status" aria-live="polite">
        <span className="work-status__spinner" aria-hidden="true" />
        Loading projects
      </div>
    )
  }

  if (error) {
    return (
      <div className="work-status work-status--error" role="alert">
        Projects could not be loaded. Please try again later.
      </div>
    )
  }

  return <div className="work-status">{emptyMessage}</div>
}
