import React, { useMemo, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import styles from './List.module.less';

const List = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const seed = query.get('seed');
    let redirectTimeout = null;
    if (!seed) {
      redirectTimeout = setTimeout(() => {
        history.replace('/list?seed=9');
      }, 0);
    }

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [location.search, history.replace]);

  const nums = useMemo(() => {
    const query = new URLSearchParams(location.search);
    const length = Math.max(1, Math.min(20, Number(query.get('seed') || 9)));
    return Array.from({ length }, (_, i) => i);
  }, [location.search]);

  const tree = useMemo(() => nums.map((i) => ({
    key: `Section${i}`,
    menus: nums.map((j) => ({
      key: `MenuMenu${j}`,
    })),
  })), [nums]);
  const filters = useMemo(() => nums.map((i) => `Filter${i}`), [nums]);
  const columns = useMemo(() => nums.map((i) => ({
    key: `Column${i}`,
    render: (record) => record[`Column${i}`],
  })), [nums]);
  const records = useMemo(
    () => nums.map(
      (i) => columns.reduce(
        (acc, col) => ({ ...acc, [col.key]: `${acc.key}-${col.key}` }),
        { key: `Item${i}`  },
      ),
      [nums, columns],
    )
  );

  return (
    <div className={styles.List}>
      <div className={styles.left}>
        {tree.map((section) => (
          <div key={section.key} className={styles.section}>
            <div title={section.key}>{section.key}</div>
            {section.menus.map((menu) => (
              <div
                key={menu.key}
                className={styles.menu}
                title={menu.key}
              >
                {menu.key}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.right}>
        <div className={styles.top}>
          <div className={styles.heading}>Heading</div>
          <button className={styles.new}>New</button>
        </div>
        <div className={styles.middle}>
          {filters.map((filter) => (
            <div key={filter} className={styles.filter}>
              <div>{filter}</div>
              <div className={styles.dropdown} />
            </div>
          ))}
          <div className={styles.filter} >
            <div>Keyword</div>
            <input className={styles.input} readOnly />
          </div>
        </div>
        <div className={styles.bottom}>
          <div className={styles.table}>
            <table>
              <thead>
                <tr className={styles.row}>
                  {columns.map((col) => (
                    <th key={col.key}>
                      <div className={styles.column}>{col.key}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {records.map((record) => (
                  <tr key={record.key} className={styles.row}>
                    {columns.map((col) => (
                      <td key={col.key}>
                        <div className={styles.cell} title={col.key}>{col.render(record)}</div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={styles.pagination}>
            {nums.map((i) => <div key={`Page${i}`} className={styles.page}>{i + 1}</div>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
