import { useAddAccountMutation, useGetAccountsQuery, useDeleteAccountMutation, useUpdateAccountMutation } from '../api/adminSlice';

function Admin() {
  const { data, error, isLoading, isSuccess } = useGetAccountsQuery();
  const [addAccount] = useAddAccountMutation();
  const [deleteAccount] = useDeleteAccountMutation();
  const [updateAccount] = useUpdateAccountMutation();

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Admin Component</b>
        </h4>
        {isLoading? <p>Loading...</p>:null}
        { isSuccess && data &&
          data.map((account) => (
            <p>
              {account.id} : {account.amount}
              <button onClick={() => deleteAccount(account.id)}>
                Delete Account
              </button>
              <button onClick={() => updateAccount({id:account.id,amount:777})}>
                Update Account
              </button>
            </p>
          ))}

        <button onClick={() => addAccount(101, data.length + 1)}>
          Add Account +
        </button>
      </div>
    </div>
  );
}

export default Admin;
