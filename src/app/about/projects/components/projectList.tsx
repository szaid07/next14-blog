export default async function ProjectListPage() {
  const response = await fetch("http://localhost:3001/repos", {
    next: { revalidate: 3600 },
  });
  const repos = await response.json();

  return (
    <ul>
      {repos.map((repo) => (
        <li key={repo.id} className="mb-8">
          <div>{repo.title}</div>
          <div>{repo.description}</div>
          <div>{repo.stargazers_count}</div>
        </li>
      ))}
    </ul>
  );
}
