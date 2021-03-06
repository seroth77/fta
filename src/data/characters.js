const characters = {
  "arcanist": {
    "ability": "Resist the Change: You have created powerful wards against the dark magic afflicting the land. You can never be <i>TRANSFORMED</i>",
    "bonus": 2,
    "defense": 37,
    "description": "A dabbler in the arcane and a seeker of secrets. Her occult knowledge is peerless. She carries the Stiletto, and is immune to being TRANSFORMED.",
    "equpiment": ["stiletto", "bandage", "ritual"],
    "ghost": {
      "abilities": {
        "disruption": 2,
        "energy-drain": 1,
        "forbidden-control": 5,
        "interuptis": 4
      },
      "bonus": 2,
      "defense": 41,
      "might": 5,
      "points": 10,
      "stride": 5
    },
    "immunity": "transformed",
    "keywords": ["forbidden", "learned", "mythos"],
    "might": 3,
    "mystic-knowledge": "ritual",
    "power": 5,
    "stride": 4,
    "vita": 21
  },
  "archeologist": {
    "ability": "Freedom: Your skills have been honed to avoid the dangers of the unknown. You can never be <i>IMMOBILIZED</i>.",
    "bonus": 1,
    "defense": 36,
    "description": "A scholar possessing knowledge of things ancient and mystical. His favored weapon is a whip which he uses to hinder his foes. He can never be IMMOBILIZED.",
    "equpiment": ["whip", "bandage"],
    "ghost": {
      "abilities": {
        "energy-drain": 1,
        "hindrance": 2,
        "luck": 2,
        "malocchio": 1
      },
      "bonus": 2,
      "defense": 35,
      "might": 3,
      "points": 10,
      "stride": 4
    },
    "immunity": "immobilized",
    "keywords": ["explore", "learned", "mythos"],
    "might": 3,
    "mystic-knowledge": null,
    "power": 5,
    "stride": 4,
    "vita": 23
  },
  "avenging-madman": {
    "ability": "Insanity: You are compelled to fling yourself into melee combat, making you unable to use Ranged weapons. You can never be <i>DERANGED</i>.",
    "bonus": 2,
    "defense": 39,
    "description": "A revenge driven farm-hand whose family was slaughtered by vampires. His rage has made him unstable but strong. He flings himself into combat with a Bale Hook. The Madman cannot be DERANGED and has outstanding nerve. As consequence, he is unable to use ranged weapons.",
    "equpiment": ["bale-hook", "bandage"],
    "ghost": {
      "abilities": {
        "energy-drain": 1,
        "empathic-anger": 3,
        "poltergeist": 3,
        "rage-force": 3
      },
      "bonus": 2,
      "defense": 34,
      "might": 3,
      "points": 10,
      "stride": 4
    },
    "immunity": "deranged",
    "keywords": ["fierce", "revenge"],
    "might": 5,
    "mystic-knowledge": null,
    "power": 5,
    "stride": 4,
    "vita": 23
  },
  "excorist": {
    "ability": "Most Holy: Your holy spirit resists corruption that would normally afflict lesser men. You are never affected by <i>BLOODLUST</i>.",
    "bonus": 1,
    "defense": 36,
    "description": "A holy man sent to purge the land of evil. He holds the Aspergillum, a weapon that can be filled with holy waters. He is immune to BLOODLUST, and can revitalize his allies through prayer.",
    "equpiment": ["aspergillum", "bandage", "holy-water"],
    "ghost": {
      "abilities": {
        "energy-drain": 1,
        "holy-wrath": 2,
        "spirit-drain": 2,
        "resistance": 3
      },
      "bonus": 3,
      "defense": 42,
      "might": 6,
      "points": 10,
      "stride": 5
    },
    "immunity": "bloodlust",
    "keywords": ["holy", "learned"],
    "might": 4,
    "mystic-knowledge": "prayer",
    "power": 5,
    "stride": 4,
    "vita": 22
  },
  "telepath": {
    "ability": "Psychic Fortitude: You may resist being drained of Power Points. Treat situations as if you had zero <i>Power Points</i> to lose.",
    "bonus": 1,
    "defense": 38,
    "description": " A talented mentalist who can access unique and powerful psychic abilities. She carries a quartz lantern that can focus the power of her mind to cause her enemies harm.",
    "equpiment": ["quartz-lantern", "bandage"],
    "ghost": {
      "abilities": {
        "energy-drain": 1,
        "essence-transfer": 3,
        "force-burst": 4,
        "mental-reinforcement": 2
      },
      "bonus": 3,
      "defense": 40,
      "might": 5,
      "points": 10,
      "stride": 4
    },
    "immunity": "power-point-drain",
    "keywords": ["learned", "psychic"],
    "might": 3,
    "mystic-knowledge": "both",
    "power": 6,
    "stride": 4,
    "vita": 22
  },
  "witch-hunter": {
    "ability": "Fearless: You have encountered dangers that would make most mortals lose their sanity. You can never be <i>SPOOKED</i>.",
    "bonus": 2,
    "defense": 38,
    "description": "A fanatical bounty hunter sworn to undo all paganism. He is a tracker and a marksman with the crossbow. He is immune to being SPOOKED.",
    "equpiment": ["crossbow", "bandage"],
    "ghost": {
      "abilities": {
        "energy-drain": 1,
        "essence-transfer": 3,
        "force-burst": 4,
        "mental-reinforcement": 2
      },
      "bonus": 3,
      "defense": 40,
      "might": 5,
      "points": 10,
      "stride": 4
    },
    "immunity": "spooked",
    "keywords": ["hunt", "martial", "military"],
    "might": 4,
    "mystic-knowledge": "prayers",
    "power": 5,
    "stride": 4,
    "vita": 21
  }
}
