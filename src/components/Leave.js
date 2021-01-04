import LeaveInfoModal from "../components/LeaveInfoModal";
import useHttp from "../hooks/useHttp";

const Leaves = () => {
  let data = useHttp("http://localhost:9090/api/v1/leaves");
  console.log(data);

  return (
    <div className="col l8 m8 offset-l4 offset-m4 striped page-height right-pane">
      <h4 className="center-align">Leaves</h4>
        <div class="col s12">
          <ul class="tabs"  ref={M => {
              window.M.Tabs.init(M, {});
          }}>
            <li class="tab col s3">
              <a href="#test1">Add Leave</a>
            </li>
            <li class="tab col s3">
              <a class="active" href="#test2">
                Show Leaves
              </a>
            </li>
          </ul>
        </div>
        <div id="test1" class="col s12">
          Test 1
        </div>
        <div id="test2" class="col s12">
          <table className="striped centered">
            <thead>
              <tr>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Status</th>
                <th>More Info</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item._id}>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                  <td>
                    {item.isApproved ? (
                      <label className="chip green accent-4 white-text">
                        Approved
                      </label>
                    ) : item.isApproved == null ? (
                      <label className="chip black-text">Pending</label>
                    ) : (
                      <label className="chip red accent-4 white-text">
                        Rejected
                      </label>
                    )}
                  </td>
                  <td>
                    <LeaveInfoModal key={item._id} data={item} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaves;
