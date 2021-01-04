const LeaveInfoModal = ({data}) => {

    return ( 
    <div>
     <i data-target={`modal-${data._id}`} className="material-icons teal-text waves-effect waves-light modal-trigger">remove_red_eye</i>
     <div 
     id={`modal-${data._id}`}
     className="modal modal-fixed-footer" 
     ref={M => {
        window.M.Modal.init(M, {});
          }}>
    <div className="modal-content centet-align">
        <span className="modal-title">Leave Details</span>
    <div className="row">
        <div className="input-field col s4">
          <input disabled id="start-date" type="text" className="validate" defaultValue={data.startDate}/>
          <label htmlFor="start-date" className="active">Start date</label>
        </div>
        <div className="input-field col s4">
          <input disabled id="end-date" type="text" className="validate" defaultValue={data.endDate}/>
          <label htmlFor="end-date" className="active">End date</label>
        </div>
        <div className="input-field col s4">
          <input disabled id="days" type="text" className="validate" defaultValue={data.days}/>
          <label htmlFor="days" className="active">Days</label>
        </div>
      </div>
      <div className="row">
      <div className="input-field col s12">
          <textarea id="reason" className="materialize-textarea" defaultValue={data.reason}/>
          <label htmlFor="reason" className="active">Reason</label>
       </div>
    </div>
    {
          data.isApproved?
          <label className="chip green accent-4 white-text">Approved</label>:
          data.isApproved==null?
          <label className="chip black-text">Pending</label>:
          <label className="chip red accent-4 white-text">Rejected</label>
    }
    </div>
    <div className="modal-footer">
      <label className="modal-close waves-effect waves-red btn-flat">Close</label>
    </div>
   </div>
   </div>
     );
}
 
export default LeaveInfoModal;