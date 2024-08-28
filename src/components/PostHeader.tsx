'use client';

import { useState } from 'react';

import { sourceCodePro } from '@/app/fonts';
import classNames from 'classnames';
import { TypeAnimation } from 'react-type-animation';

import styles from './PostHeader.module.css';

export interface PostHeaderProps {
	title: string;
	description: string;
}

export const PostHeader = (props: PostHeaderProps) => {
	const [isTyped, setIsTyped] = useState<boolean>(false);

	return (
		<div className={classNames(styles.container, sourceCodePro.className)}>
			{isTyped ? (
				<h1 className={styles.title}>
					{props.title}
					<span
						style={{
							width: '10px',
							display: 'inline-block',
						}}
					/>
				</h1>
			) : (
				<TypeAnimation
					sequence={[
						props.title,
						() => {
							setIsTyped(true);
						},
					]}
					wrapper="h1"
					cursor
					className={styles.title}
				/>
			)}
			<p
				className={classNames(styles.subtitle, {
					[styles.subtitleVisible]: isTyped,
				})}
			>
				{props.description}
			</p>
		</div>
	);
};
