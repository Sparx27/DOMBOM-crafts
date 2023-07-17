const d = document,
  n = navigator,
  ua = n.userAgent;

export default function userAgent(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      windows: () => ua.match(/windows phone/i),
      any: function() {
        return this.android()||this.ios()||this.windows();
      }
    },
    isDesktop = {
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      windows: () => ua.match(/windows/i),
      any: function() {
        return this.linux()||this.mac()||this.windows();
      }
    }

    $id.innerHTML = `
      <p>User Agent: <b>${ua}</b></p>
      <p>Platform: <b>${isMobile.any() ? isMobile.any() : isDesktop.any()}</b></p>
    `
    if(isDesktop.any()) $id.innerHTML += `
      <button>"Download" for ${isDesktop.any()}</button>
    `
    if(isMobile.any()) $id.innerHTML += `
      <button>"Download" for ${isMobile.any()}</button>
    `
}