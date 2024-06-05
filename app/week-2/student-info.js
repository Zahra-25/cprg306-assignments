import Link from 'next/link';
import styles from '../components/student-info.module.css';


const StudentInfo = () => {
    
    return (
        <div className={styles[
            'student-info-container'
        ]}>
            <h1 className={styles['student-name']}>Zahra Keshtkar</h1>
            <p className={styles['github-link']}>
                <Link href="https://github.com/Zahra-25">
                    My Github Repository
                </Link>
            </p>
            
    </div>
  );
};
            
export default StudentInfo;