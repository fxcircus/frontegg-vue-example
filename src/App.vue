<template>
  <div id="app" v-if="fronteggLoaded">
    <div v-if="authState.user">
      <span>Logged in as: {{ authState.user.name }}</span>
    </div>
    <div>
      <button v-if="authState.user" v-on:click="logout">Logout</button>
      <button v-if="authState.user" v-on:click="showAccessToken">
        What is my access token?
      </button>
      <button v-if="!authState.user" v-on:click="goToLogin">Login</button>
      <button v-on:click="showAdminPortal">Open admin portal</button>

      <!-- Conditionally render the div based on the user's roleIds -->
      <div v-if="checkRoles()">
        Private area for admins
      </div>
    </div>
  </div>
</template>

<script>
import {
  useFrontegg,
  ContextHolder,
  useFronteggAuthGuard,
  AdminPortal
} from "@frontegg/vue";

export default {
  setup() {
    const { fronteggLoaded, authState, loginWithRedirect } = useFrontegg();
   
    useFronteggAuthGuard(); // auto redirects the user to the login page / application
    
    const goToLogin = () => {
      loginWithRedirect();
    };
    
    const logout = () => {
      const baseUrl = ContextHolder.getContext().baseUrl;
      window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
    };
    
    const showAccessToken = () => {
      alert(authState.user.accessToken);
    };
    
    const showAdminPortal = () => {
      AdminPortal.show();
    };

    // Function to check if user has the required role
    const checkRoles = () => {
      return (
        authState.user &&
        authState.user.roles &&
        authState.user.roles.some(role => role.id === 'test')
      );
    };

    return {
      fronteggLoaded,
      authState,
      goToLogin,
      logout,
      showAccessToken,
      showAdminPortal,
      checkRoles
    };
  },
};
</script>
