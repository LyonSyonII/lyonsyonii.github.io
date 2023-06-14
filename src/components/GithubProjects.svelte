<script lang="ts">
  import config from "../../gitprofile.config";
  import type { Repo } from "../../gitprofile.config";

  const className = "";
  export { className as class };

  const exclude = config.github.exclude?.projects ?? [];

  const projects: Promise<Repo[]> = fetch(
    `https://api.github.com/users/${config.github.username}/repos`
  )
    .then((res) => res.json())
    .then((res: Repo[]) =>
      res
        .filter((repo) => !repo.fork && !exclude.includes(repo.name))
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, config.github.limit)
    );
</script>

{#await projects then projects}
  {#each projects as project}
    <a href={project.html_url} target="_blank" rel="noreferrer"
      >{project.name}</a
    >
  {/each}
{/await}

<style>
  @import "../styles/main.css";
</style>
