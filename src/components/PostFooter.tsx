import Link from 'next/link';
import { RiGithubFill, RiLinkedinFill } from 'react-icons/ri';

import styles from './PostFooter.module.css';

export const PostFooter = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.avatar}>
				<img src="/images/juuso.jpg" alt="Me" />
			</div>
			<div className={styles.about}>
				<h4 className={styles.title}>About the writer</h4>
				<p className={styles.text}>
					{`Hi 👋 I'm Juuso, a full-stack engineer based in Helsinki, Finland with a special interest in topics related to software quality, scalability and developer productivity. I write mostly because I find it fun, but I also find it very awesome that you've read this far. Thanks for your time!`}
				</p>
				<div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
					<Link
						href={'https://github.com/juiceo'}
						target="_blank"
						rel="noopener noreferrer"
						style={{ display: 'inline' }}
					>
						<RiGithubFill size={24} />
					</Link>
					<Link
						href={'https://www.linkedin.com/in/juiceo'}
						target="_blank"
						rel="noopener noreferrer"
					>
						<RiLinkedinFill size={24} />
					</Link>
				</div>
			</div>
		</div>
	);
};
