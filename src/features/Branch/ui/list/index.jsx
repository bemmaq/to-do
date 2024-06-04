// import {
// 	Box,
// 	Paper,
// 	Table,
// 	TableBody,
// 	TableContainer,
// 	TableHead,
// 	TableRow,
// } from '@mui/material'
// import TableHeader from '../../../../shared/ui/TableHeader'
// import HOCList from '../../../../widgets/HOCList'

// const BranchList = () => {
// 	return (
// 		<Box>
// 			{/* <FullScreenModal
// 				open={modal.create}
// 				handleClose={() => handleModal('create')}
// 			>
// 				<CreateBranch />
// 			</FullScreenModal> */}
// 			{/* <FullScreenModal
// 				open={modal.edit}
// 				handleClose={() => handleModal('edit')}
// 			>
// 				<BranchEdit branch={activeBranch} />
// 			</FullScreenModal> */}
// 			{/* <FullScreenModal
// 				open={modal.info}
// 				handleClose={() => handleModal('info')}
// 			>
// 				<BranchInfo branch={activeBranch} />
// 			</FullScreenModal> */}
// 			{/* <PromptModal
// 				open={modal.delete}
// 				agreeCallback={handleDalateBranch}
// 				text='Вы действительно хотите удалить филиал ?'
// 				handleClose={() => handleModal('delete')}
// 			/> */}
// 			<TableHeader
// 				title='Филиалы'
// 				// addHandler={() => {
// 				// 	handleModal('create')
// 				// }}
// 				showCreateButton
// 				buttonText='Добавить филиал'
// 			/>
// 			<HOCList
// 				// isError={getBranchStatus === StatusResponse.ERROR}
// 				// isLoading={getBranchStatus === StatusResponse.LOADING}
// 				// isSuccess={getBranchStatus === StatusResponse.SUCCESS}
// 				// length={branch.length}
// 				noLengthMessage='Больше нет контактов'
// 			>
// 				<TableContainer sx={{ background: 'red' }} component={Paper}>
// 					<Table>
// 						<TableHead>
// 							<TableRow>
// 								{/* {headerLinks.map((tableHeaders: string) => (
// 									<TableCell
// 										key={tableHeaders}
// 										sx={{
// 											textTransform: 'uppercase',
// 											fontWeight: 700,
// 											fontSize: '18px',
// 										}}
// 									>
// 										{tableHeaders}
// 									</TableCell>
// 								))} */}
// 							</TableRow>
// 						</TableHead>
// 						<TableBody>
// 							{/* {branch.map((row, index) => (
// 								<Row
// 									key={index}
// 									row={row}
// 									сallback={() => {
// 										handleChangeActiveBranch(row)
// 										handleModal('info')
// 									}}
// 								/>
// 							))} */}
// 						</TableBody>
// 					</Table>
// 				</TableContainer>
// 			</HOCList>
// 		</Box>
// 	)
// }

// export default BranchList


import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from './../../store/actions';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <h4>{user.name}</h4>
        </div>
      ))}
    </div>
  );
};

export default UserList;

