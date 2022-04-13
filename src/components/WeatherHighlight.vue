<template>
  <div class="todays-highlights__item">
    <div>
      <h3 class="highlight-title">
        <slot name="title"> Default title </slot>
      </h3>
    </div>
    <div>
      <slot name="body"> Empty body </slot>
    </div>
    <div class="todays-highlights__description">
      <slot name="description"></slot>
    </div>
  </div>
</template>
