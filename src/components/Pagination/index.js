import React, { useEffect, useState } from 'react';

import classNames from "classnames/bind"

import styles from "./Pagination.module.scss"

const cx = classNames.bind(styles)
// Example items, to simulate fetching from another resources.
function Pagination({pages, page, setPage}) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  let list = []
  for(let i = 0; i < pages ; i++){
    list.push(i + 1)
  }
  console.log(page)
  return (
    <div style={{marginTop:50}}>
      {page > 1 ? 
        <span onClick={() => setPage(page - 1)}><button>Previous</button></span>
        : <span>Previous </span>
      }
    
      {list.map((item) => {
        return <span onClick={() => setPage(item)}>{item}</span>
      })}
      {page < list.length ? 
        <span onClick={() => setPage(page + 1)}><button>Next</button></span>
        : <span> Next</span>
      }
    </div>
  );
}
export default Pagination;