import React, { useState, useEffect, Component } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

function createData(source, location, company) {
  return { source, location, company };
}
let deletion = {};

function deleteListing() {
  fetch('https://worktraceserver.herokuapp.com/listings/removeListing', {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json, text/plain',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({listings: deletion})
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.log(error));
 }

/*
  createData('indeed', 'LA', 'Riot'),
  createData('linkedIn', 'LA', 'Tinder'),
  createData('monster', 'NYC', 'Uber'),
  createData('linkedIn', 'NYC', 'Lyft'),
  createData('indeed', 'SF', 'Apple'),
  createData('monster', 'Seattle', 'Amazon'),
  createData('monster', 'SF', 'Microsoft'),
  createData('linkedIn', 'LA', 'Facebook'),
  createData('linkedIn', 'SF', 'Google'),
  createData('monster', 'NYC', 'Tesla'),
*/
let rows = [];

const headCells = [
  {
    id: 'source',
    numeric: false,
    disablePadding: true,
    label: 'Source',
  },
  { id: 'location', numeric: true, disablePadding: false, label: 'Location' },
  { id: 'company', numeric: true, disablePadding: false, label: 'Company' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, numSelected, rowCount } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
          >
            <TableSortLabel>{headCell.label}</TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h5"
          id="tableTitle"
          component="div"
          style={{ fontWeight: 600, fontFamily: `Orbitron, sans-serif` }}
        >
          WorkTrace
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete" >
            <DeleteIcon 
              onClick={() => deleteListing()}
            />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 150,
    maxWidth: 200,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  let currentUserId;
  const [rows, setListing] = useState([])
  
  function retrieveListings () {
    fetch('https://worktraceserver.herokuapp.com/listings/getListings', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({user_id: currentUserId})
    })
      .then((res) => res.json())
      .then((data) => {
        setListing(data.userListings)
        console.log(rows);
      })
      .catch((error) => console.log(error));
   }
  
   useEffect(() => {
    fetch('https://worktraceserver.herokuapp.com/login/checkSession')
      .then((res) => res.json())
      .then((data) => {
        currentUserId = data.user_id;
        console.log(currentUserId);
        retrieveListings();
        setTimeout(() => {
          setInterval(() => {
            retrieveListings();
          }, 1000)
        }, 1000)
      })
      .catch((error) => console.log(error));
  }, []);


  const [selected, setSelected] = React.useState([]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.company);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size="small"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={rows.length}
            />
            <TableBody>
              {rows.map((row, index) => {
                const isItemSelected = isSelected(row.company);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.company)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    selected={isItemSelected}
                    id={row.listing_id}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={isItemSelected}
                        inputProps={{ 'aria-labelledby': labelId }}
                        onClick={() => {
                          if (deletion.hasOwnProperty(row.listing_id)) {
                            delete deletion[row.listing_id];
                          } else {
                            deletion[row.listing_id] = row.listing_id;
                          }
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      <a href={row.url} onClick={() => window.open(row.url)}>{row.source}</a>
                    </TableCell>
                    <TableCell align="right">{row.location}</TableCell>
                    <TableCell align="right">{row.company}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}
