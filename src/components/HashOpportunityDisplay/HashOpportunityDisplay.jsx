import { useEffect, useState } from 'react';
import { onValue, ref } from "firebase/database";
import { db } from '../../firebase';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@mui/material';
import './HashOpportunityDisplay.css'

const DATA_HANDLE = '16NmGYBaGKEyyAFxzeYXpEM9zB1bc8A5Dqy5ypXJY1EU';

function HashOpportunityDisplay() {
    const [data, setData] = useState(null);
    const [order, setOrder] = useState('desc');
    useEffect(() => {
        const query = ref(db);
        return onValue(query, (snapshot) => {
            const val = snapshot.val();
            if (snapshot.exists()) {
                const specific = val[DATA_HANDLE]['Opportunities'];
                setData(specific);
            }
        });

    }, []);

    const handleRequestSort = (event) => {
        const isAsc = order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
    }; 

    function descendingComparator(a, b) {
        if (b.Strikes < a.Strikes) {
          return -1;
        }
        if (b.Strikes > a.Strikes) {
          return 1;
        }
        return 0;
      }
      
    function getComparator(order) {
        return order === 'desc'
          ? (a, b) => descendingComparator(a, b)
          : (a, b) => -descendingComparator(a, b);
    }

    function stableSort(array, comparator) {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
          const order = comparator(a[0], b[0]);
          if (order !== 0) {
            return order;
          }
          return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    return (
    <div>
      {data ? 
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Location</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right" onClick={handleRequestSort}>Strikes Worth</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {stableSort(data, getComparator(order)).map((row, index) => (
              <TableRow
                key={row.ID}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.Location}
                </TableCell>
                <TableCell align="right">{row.Description}</TableCell>
                <TableCell align="right">{row.Strikes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      : <p>Loading Data</p>}
    </div>
    );
}

export default HashOpportunityDisplay;