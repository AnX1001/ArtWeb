<template>
  <div class="container">
    <h1 class="title">Me & art</h1>
    <h2 class="subheading">New exhibition this month</h2>

    <section class="bio">
      <figure class="bio__image">
        <img
          src="https://images.unsplash.com/photo-1615339725569-80172615f345?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt="profile image"
        />
      </figure>

      <div class="bio__text">
        <h1 class="greet">Nice to meet you!</h1>
        <h2>Lorem ipsum dolor sit</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          doloremque neque atque ducimus. Eos, libero cumque distinctio,
          cupiditate repellat voluptatum incidunt eligendi doloreihil.
        </p>
        <h3>Lorem</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur
          obcaecati quidem nostrum fuga hic consequatur, corrupti, doloribus ab
          quis enim, alias iste animi iusto ipsa dolorum vero? Excepturi, ipsum
          amet. Enim in quidem necessitatibus dignissimos deleniti. Esse
          molestiae consequatur dolorum velit ut ab mollitia voluptas optio
          laborum hic. Tempora deserunt recusandae odio reiciendis totam a
          temporibus tempore voluptas sint impedit?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          omnis eaque dolorem sed asperiores sint maiores quaerat voluptatibus
          error facilis animi nemo, ad officiis eius aperiam odio vitae
          quibusdam a! Ex pariatur perspiciatis eos. A expedita nam minima,
          beatae sunt earum. Neque unde sunt officia accusantium laborum fugit
          vel cum aut. Esse pariatur illo iusto quos magnam praesentium delectus
          est.
        </p>

        <ul>
          <li><b>2021</b></li>
          <p>
            Exhibtion A Lorem ipsum dolor sit, amet consectetur adipisicing
            elit. Nemo amet iste nisi at culpa alias nihil eaque excepturi
            consequatur error, totam fugit veritatis, officia quibusdam nesciunt
            autem ut inventore architecto!
          </p>
          <li><b>2023</b></li>
          <p>
            Exhibtion A Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Praesentium, labore est
          </p>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Info",
  components: {},
};
</script>

<style lang="scss" scoped>
.container {
  .title {
    text-align: center;
    margin-bottom: 1rem;
    font-size: $h1-font-size;
  }

  .subheading {
    text-align: center;
    margin-bottom: 5rem;
  }

  .bio {
    height: fit-content;
    display: flex;
    width: 100%;
    gap: 2rem;

    @media screen and (max-width: 1024px) {
      justify-content: center;
      margin: 0;
      flex-wrap: wrap;
    }

    .bio__image {
      img {
        flex-grow: 1;

        @media screen and (max-width: 1024px) {
          width: 100vw;
        }
      }
    }

    .bio__text {
      line-height: 1.5;
      flex-grow: 1;
      max-width: 550px;

      ul {
        padding-left: 0;
      }

      @media screen and (max-width: 768px) {
        padding: 0;
      }
      .greet {
        font-size: 3rem;
        margin: 0;
        margin-bottom: 3rem;

        @media screen and (max-width: 768px) {
          font-size: 3rem;
        }
      }
    }
  }
}
</style>
