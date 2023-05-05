import { CSSProperties } from "react";

interface MinesweeperStyles {
   [key: string]: CSSProperties;
}

export const minesweeperStyles: MinesweeperStyles = {
   global: {
      boxSizing: 'border-box',
    },
    body: {
      margin: 0,
      backgroundColor: '#333',
      display: 'flex',
      alignItems: 'center',
      fontSize: '3rem',
      flexDirection: 'column',
      color: 'white',
      height: '1200px'
    },
    title: {
      margin: '20px',
    },
    subtext: {
      color: '#CCC',
      fontSize: '1.5rem',
      marginBottom: '10px',
    },
    board: {
      display: 'inline-grid',
      padding: '10px',
      gridTemplateColumns: 'repeat(var(--size), 60px)',
      gridTemplateRows: 'repeat(var(--size), 60px)',
      gap: '4px',
      backgroundColor: '#777',
    },
    'board > global': {
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      border: '2px solid #BBB',
      userSelect: 'none',
    },
    'board > [data-status="hidden"]': {
      backgroundColor: '#BBB',
      cursor: 'pointer',
    },
    'board > [data-status="mine"]': {
      backgroundColor: 'red',
    },
    'board > [data-status="number"]': {
      backgroundColor: 'none',
    },
    'board > [data-status="marked"]': {
      backgroundColor: 'yellow',
    },
}