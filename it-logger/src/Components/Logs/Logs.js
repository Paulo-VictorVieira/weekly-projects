import React from 'react';

const Logs = () => {
  const [logs, setLogs] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getLogs = async () => {
    setLoading(true);

    const res = await fetch('/logs');
    const data = await res.json();

    setLogs(data);
    setLoading(false);
  };

  React.useEffect(() => {
    getLogs();
  }, []);

  if (loading) return <h4>Loading...</h4>;
  return (
    <ul className="collection with-header">
      <li className="collection-header">
        <h4 className="center">System Logs</h4>
      </li>

      {!loading && logs.length === 0 ? (
        <p className="center">No logs to show ...</p>
      ) : (
        logs.map((log) => <li key={log.id}>{log.message}</li>)
      )}
    </ul>
  );
};

export default Logs;
