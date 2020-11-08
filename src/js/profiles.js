import { $ } from './dom-utils'
import profiles from '../profiles/profiles.json'

const fillFields = (fieldToFill, currentProfile) => {
  fieldToFill.forEach(field => {
    if (currentProfile[field]) {
      $(`#field-${field}`).value = currentProfile[field]
    }
  })
}

export function prepareProfiles () {
  if (!profiles?.length) {
    console.error('profiles.json file dont exist, or its not an array')
    return
  }

  const profilesElement = $('#profiles')
  const fieldToFill = [
    'firstname',
    'lastname',
    'birthday',
    'placeofbirth',
    'address',
    'city',
    'zipcode',
  ]

  profiles.forEach(profile => {
    const btn = document.createElement('BUTTON')
    btn.innerHTML = profile.profilname ? `${profile.profilname}` : `${profile.firstname}`
    btn.addEventListener('click', async (event) => {
      fillFields(fieldToFill, profile)
    })
    profilesElement.appendChild(btn)
  })
}
