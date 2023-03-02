import React from 'react';
import './TransactionList.scss';

const TransactionList = () => {

    const transactions = [
        {
            id: 1,
            user: {
                name: 'Aokiji',
                image: 'https://pbs.twimg.com/media/BduTxWnIUAAKT_5.jpg:large'
            },
            date: '28 Feb 2023',
            time: "6:23 PM",
            money: '$23.50',
            status: "Received"
        },
        {
            id: 2,
            user: {
                name: 'Kizaru',
                image: 'https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
            },
            date: '28 Feb 2023',
            time: "6:23 PM",
            money: '$23.50',
            status: "Outgoing"
        },
        {
            id: 3,
            user: {
                name: 'Akainu',
                image: 'https://www.claconnect.com/en/-/media/claimages/people/v/dylan-valentine.jpg?rev=ea6fc1050f0c42dea3e5adbba67e42c9'
            },
            date: '28 Feb 2023',
            time: "6:23 PM",
            money: '$23.50',
            status: "Received"
        }
    ];

    return (
        <div className="transaction-list">
            <h1 className='transaction_heading'>Last Transactions</h1>
            {transactions.map((transaction) => (
                <div className="transaction-card" key={transaction.id}>
                    <div className="transaction-card__user">
                        <img src={transaction.user.image} alt={`User ${transaction.user.name}`} />
                        <div className='transaction-card__name_date'>
                            <div className='details'><h3>{transaction.user.name}</h3></div>
                            <div className='date'>{transaction.date}
                                <div className='time'>{transaction.time}</div>
                            </div>
                        </div>
                    </div>

                    <div>
                    <div className="transaction-card__money">{transaction.money}</div>
                    <div className='status'>{transaction.status}</div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TransactionList;
