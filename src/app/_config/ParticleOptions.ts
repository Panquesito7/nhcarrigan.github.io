export const ParticleOptions = {
  background: {
    opacity: 0,
  },
  fullScreen: {
    zIndex: -1,
  },
  interactivity: {
    events: {
      onHover: {
        mode: 'trail',
        enable: true,
      },
    },
    modes: {
      trail: {
        delay: 0.005,
        quantity: 5,
        pauseOnStop: true,
        particles: {
          color: {
            value: '#ff0000',
            animation: {
              enable: true,
              speed: 400,
              sync: true,
            },
          },
          collisions: {
            enable: false,
          },
          links: {
            enable: false,
          },
          move: {
            outModes: {
              default: 'destroy',
            },
            speed: 2,
          },
          size: {
            value: 5,
            animation: {
              enable: true,
              speed: 5,
              minimumValue: 1,
              sync: true,
              startValue: 'min',
              destroy: 'max',
            },
          },
        },
      },
    },
  },
  particles: {
    color: {
      animation: {
        enable: true,
        sync: false,
        speed: 50,
      },
      value: '#ff0000',
    },
    links: {
      color: 'random',
      enable: false,
    },
    collisions: {
      enable: true,
    },
    move: {
      enable: true,
    },
    number: {
      density: {
        enable: true,
      },
    },
    opacity: {
      animation: {
        enable: true,
        minimumValue: 0.3,
        speed: 0.5,
      },
      value: 0.8,
      random: {
        enable: true,
        minimumValue: 0.3,
      },
    },
    size: {
      animation: {
        enable: true,
        minimumValue: 1,
        speed: 3,
      },
      value: 5,
      random: {
        enable: true,
        minimumValue: 1,
      },
    },
  },
  emitters: [],
};
