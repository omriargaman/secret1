import styles from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import Image from 'next/image';

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true, // can also be true or 'blocking'
  }
}
export async function getStaticProps(context) {
  console.log("getStaticProps",context)
  return {
    // Passed to the page component as props
    props: { agentId:context.params.agentId },
  }
}
export default function Agent({agentId}){
  console.log("AgentId:",agentId)
  let imageUrl=`https://randomuser.me/api/portraits/med/men/${agentId}.jpg`
  let password=Math.floor(Math.random()*10000)
  if(agentId==13){
    imageUrl=`/images/agentshot.png`
    password="חציל זה טעים"

  }
  
  return(
    <div className={styles.container}>
      <header className={styles.header}>

          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src={imageUrl}
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt=""
                />
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>מספר הסוכן: {agentId}</a>
              </Link>
            </h2>
            <h3>סיסמא סודית:  <b>{password}</b></h3>
            <h3></h3>
          </>
        
      </header>
      
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← חזרה לעמוד הבית</a>
          </Link>
        </div>
      
    </div>

  );
}