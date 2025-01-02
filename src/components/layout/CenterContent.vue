<template>
  <main>
    <header>
      <slot name="title"></slot>
    </header>
    <article>
      <slot name="button"></slot>
    </article>
    <main class="container-lists">
      <slot name="list"></slot>
    </main>
  </main>
</template>

<style scoped>
header {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.container-lists {
  margin-top: 3em;
  min-width: 12rem;
}

</style>
