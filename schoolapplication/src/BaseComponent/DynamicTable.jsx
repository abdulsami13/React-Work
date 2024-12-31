import "./StyleTable.css"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Checkbox } from "@mui/material";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function DynamicTable(props) {
    const { datasource, title, cols } = props;
    return (
      <>
        <div>
          {/* <div>
            <h2>{title}</h2>
          </div> */}
          {datasource && Array.isArray(datasource) && (
            <table className="table table-striped" style={{width:"100%"}}>
              <thead>
                <tr style={{}}>
                    <th>
                    <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
                    </th>
                  {cols && Array.isArray(cols) && cols.length > 0
                    ? cols.map((x, i) => <th key={i}>{x.displayName}</th>)
                    : null}
                </tr>
              </thead>
              <tbody>
                {datasource.map((x, i) => (
                  <tr key={i}>
                    <td>
                    <Checkbox
        {...label}
        icon={<BookmarkBorderIcon />}
        checkedIcon={<BookmarkIcon />}
      />
                    </td>
                    {cols.map((e, ind) => (
                        
                      <td key={ind}>
                          {x[e.key]}                    
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </>
    );
  }
  
  