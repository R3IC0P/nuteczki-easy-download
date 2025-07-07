function Logo({
  size = '24px',
  variant = 'primary',
  animated = false,
  simplifiedLevel = 0,
} = {}) {
  const simplified =
    simplifiedLevel !== 0 ? `simplified-${simplifiedLevel}` : ''

  return /*html*/ `
    <div
      class="ned-logo ${animated ?? 'animated'} ${simplified}"
      style="
          --ned-logo-size: ${size}; 
          ${
            variant === 'secondary' ? '--ned-logo-color: var(--ned-white);' : ''
          }
        ">
      <div class="ned-logo__icon">
        <svg viewbox="0 0 100 100" class="ned-logo__ring">
          <path d="M 95 50 A 45 45 0 0 1 5 50 A 45 45 0 0 1 50 5" />
          <path d="M 78 15 A 45 45 0 0 1 95 50" />
        </svg>
        <div class="ned-logo__lines">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="ned-logo__text">
        <p>NED</p>
        <p>Nuteczki Easy Download</p>
      </div>
    </div>
  `
}

export default Logo
