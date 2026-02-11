import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

interface NoteLinkProps {
  id: string;
  children: React.ReactNode;
}

export default function NoteLink({id, children}: NoteLinkProps): React.JSX.Element {
  return (
    <Link to={`/zettel/${id}`} className={styles.noteLink}>
      <span className={styles.noteId}>{id}</span>
      <span className={styles.noteTitle}>{children}</span>
    </Link>
  );
}
