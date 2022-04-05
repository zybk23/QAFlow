<template>
  <div class="login-container">
    <div class="login-items-container">
      <div class="login-container-left-side">
        <div class="login-title-container">
          <p class="login-title">Sign Up</p>
          <div class="social-media-icons">
            <div class="media-container">
              <i class="fab fa-linkedin-in media-icon" />
            </div>
            <div class="media-container">
              <i class="fab fa-twitter media-icon" />
            </div>
          </div>
        </div>
        <Input
          :value="name"
          type="text"
          placeholder="username"
          :handleInput="handleChangeName"
          title="Username"
        />
        <Input
          :value="email"
          placeholder="email"
          type="text"
          :handleInput="handleChangeEmail"
          title="Email"
        />
        <Input
          :value="password"
          placeholder="password"
          type="password"
          :handleInput="handleChangePassword"
          title="Password"
        />
        <button v-on:click="handleSignUp" class="sign-in">Sign Up</button>
        <div class="login-container-bottom-info">
          <div class="login-container-remember-container">
            <input type="checkbox" class="login-container-remember-checkbox" />
            <p class="login-container-remember-text">Remember Me</p>
          </div>
          <p class="login-container-forgot-password-text">Forgot Password</p>
        </div>
      </div>
      <div class="login-container-right-side">
        <h2 class="login-container-right-side-title">Welcome to register</h2>
        <h2 class="login-container-right-side-sub-title">
          You have an account
        </h2>
        <button
          v-on:click="handleOpenLoginPage"
          class="login-container-right-side-signup-button"
        >
          Sign In
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "../components/Input";
export default {
  name: "register",
  components: {
    Input,
  },
  data: () => {
    return {
      name: null,
      password: null,
      email: null,
    };
  },
  computed: {},

  methods: {
    handleChangeName(e) {
      this.name = e.target.value;
    },

    handleChangePassword(e) {
      this.password = e.target.value;
    },

    handleChangeEmail(e) {
      this.email = e.target.value;
    },
    handleSignUp() {
      const params = {
        name: this.name,
        email: this.email,
        password: this.password,
      };
      this.$store
        .dispatch("register", params)
        .then((res) => {
          const { data } = res;
          if (!data.success) {
            alert(data.message);
          } else {
            this.$router.push({ path: "/" });
          }
        })
        .catch((err) => {
          console.log("register err", err);
        });
    },
    handleOpenLoginPage() {
      this.$router.push({ path: "/" });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: "center";
  justify-content: center;
  padding: 120px 360px;
  background-color: #f8f9fd;

  .login-items-container {
    width: 100%;
    height: 468px;
    display: flex;
    flex-direction: row;
    background-color: #f65869;

    .login-container-left-side {
      display: flex;
      width: 50%;
      height: 100%;
      flex-direction: column;
      padding: 24px;
      background-color: #fff;

      .login-title-container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 20%;

        .login-title {
          font-family: "Lato", Arial, sans-serif;
          font-size: 32px;
          line-height: 1.8;
          font-weight: normal;
        }

        .social-media-icons {
          display: flex;
          flex-direction: row;
          align-items: center;

          .media-container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            padding: 4px;
            border-radius: 50%;
            margin-left: 12px;
            /* border: 0.2px solid rgb(214, 211, 211); */
            box-shadow: 1px 1px 8px #888888;
            cursor: pointer;

            &:hover {
              background-color: #f35588;
              transition: 0.5s ease-in-out;
            }

            .media-icon {
              font-size: 20px;
              color: gray;

              &:hover {
                color: #fff;
              }
            }
          }
        }
      }

      .sign-in {
        width: 100%;
        height: 12%;
        background-color: #f35588;
        cursor: pointer;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 20px;
        border-radius: 16px;
        border: none;
        outline: none;
      }

      .login-container-bottom-info {
        width: 100%;
        height: 20%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        .login-container-remember-container {
          display: flex;
          flex-direction: row;
          cursor: pointer;
          align-items: center;
          justify-content: flex-start;

          .login-container-remember-checkbox {
            margin-right: 12px;
            width: 18px;
            height: 18px;
            margin-top: -4px;
          }

          .login-container-remember-text {
            color: #f35588;
            font-family: "Lato", Arial, sans-serif;
            font-size: 16px;
            line-height: 1.8;
            font-weight: normal;
          }
        }

        .login-container-forgot-password-text {
          color: gray;
          font-family: "Lato", Arial, sans-serif;
          cursor: pointer;
          font-size: 16px;
          line-height: 1.8;
          font-weight: normal;
        }
      }
    }

    .login-container-right-side {
      display: flex;
      width: 50%;
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background-color: #f65869;

      .login-container-right-side-title {
        font-family: "Lato", Arial, sans-serif;
        font-size: 32px;
        font-weight: 900;
        color: #fff;
        margin-bottom: 12px;
      }

      .login-container-right-side-sub-title {
        font-family: "Lato", Arial, sans-serif;
        font-size: 16px;
        font-weight: normal;
        color: #fff;
        margin-bottom: 12px;
      }

      .login-container-right-side-signup-button {
        width: 90px;
        height: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        outline: none;
        border: 1px solid #fff;
        background-color: transparent;
        color: #fff;
        cursor: pointer;
      }
    }
  }
  .div1 {
    width: 100%;
    height: 20%;
    background-color: red;
  }
  .div2 {
    width: 100%;
    height: 20%;
    background-color: orange;
    margin-top: 20px;
  }
}
</style>
