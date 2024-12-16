// 解决异步竞态导致的问题
// https://react.dev/learn/you-might-not-need-an-effect#fetching-data
// https://maxrozen.com/race-conditions-fetching-data-react-with-useeffect
function useData(url) {
  const [data, setData] = useState(null);

  useEffect(() => {
    let ignore = false
    fetch(url, { signal })
      .then((response) => response.json())
      .then((json) => {
        if (ignore) return
        setData(json);
      });

    return () => {
      ignore = true
    };
  }, [url]);

  return data;
}
