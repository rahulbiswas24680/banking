import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

function Home() {

  const loggedIn = { firstName: 'Rahul', lastName: 'Biswas', email: 'rahul@rb.com' };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and Manange you account and transaction efficiently."
          />

          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.65}
          />
        </header>

        RECENT TRANSACTIONS

      </div>

      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.52 }, 
          {currentBalance: 452.52}]}
      />

    </section>
  )
}

export default Home