import dateFns from 'date-fns/locale/da'

export default {
  dateFns,

  format: {
    date: 'd/M/yyyy',
    time: 'p',
    dateTime: '$t(format:date) $t(format:time)',
    longDate: 'MMM d',
    longDateTime: "MMMM d 'at' p",
  },

  translation: {
    common: {
      account: 'Konto',
      actions: 'Handlinger',
      addAttachment_title: 'Vedhæft fil',
      addComment: 'Skriv kommentar',
      addManager_title: 'Tilføj projektleder',
      addMember_title: 'Tilføj medlem',
      addUser_title: 'Tilføj bruger',
      administrator: 'Administrator',
      all: 'Alle',
      allChangesWillBeAutomaticallySavedAfterConnectionRestored:
        'Alle ændringer vil automatisk blive gemt<br />ved genforbindelse',
      areYouSureYouWantToDeleteThisAttachment:
        'Vil du slette den vedhæftede fil?',
      areYouSureYouWantToDeleteThisBoard: 'Vil du slette dette bræt?',
      areYouSureYouWantToDeleteThisCard: 'Vil du slette dette kort?',
      areYouSureYouWantToDeleteThisComment: 'Vil du slette denne kommentar?',
      areYouSureYouWantToDeleteThisLabel: 'Vil du slette dette mærkat?',
      areYouSureYouWantToDeleteThisList: 'Vil du slette denne liste?',
      areYouSureYouWantToDeleteThisProject: 'Vil du slette dette projekt?',
      areYouSureYouWantToDeleteThisTask: 'Vil du slette denne opgave?',
      areYouSureYouWantToDeleteThisUser: 'Vil du slette denne bruger?',
      areYouSureYouWantToLeaveBoard: 'Vil du forlade dette bræt?',
      areYouSureYouWantToLeaveProject: 'Vil du forlade dette projekt?',
      areYouSureYouWantToRemoveThisManagerFromProject:
        'Vil du slette denne projektleder fra projektet?',
      areYouSureYouWantToRemoveThisMemberFromBoard:
        'Vil du slette dette medlem fra projektet?',
      attachment: 'Vedhæftede fil',
      attachments: 'Vedhæftede filer',
      authentication: 'Brugervalidering',
      background: 'Baggrundsbillede',
      board: 'Bræt',
      boardNotFound_title: 'Bræt ikke fundet',
      cardActions_title: 'Korthandlinger',
      cardNotFound_title: 'Kort ikke fundet',
      cardOrActionAreDeleted: 'Kort eller handling er slettet',
      color: 'Farve',
      createBoard_title: 'Opret bræt',
      createLabel_title: 'Opret mærkat',
      createNewOneOrSelectExistingOne:
        'Lav en ny eller marker<br />en eksisterende',
      createProject_title: 'Opret projekt',
      createTextFile_title: 'Opret tekstfil',
      currentPassword: 'Nuværende løsen',
      dangerZone_title: 'Farligt afsnit',
      date: 'Dato',
      dueDate_title: 'Afleveringsfrist',
      deleteAttachment_title: 'Slet vedhæftning',
      deleteBoard_title: 'Slet bræt',
      deleteCard_title: 'Slet kort',
      deleteComment_title: 'Slet kommentar',
      deleteLabel_title: 'Slet mærkat',
      deleteList_title: 'Slet liste',
      deleteProject_title: 'Slet projekt',
      deleteTask_title: 'Slet opgave',
      deleteUser_title: 'Slet bruger',
      description: 'Beskrivelsen',
      dropFileToUpload: 'Slip fil for at dele',
      editAttachment_title: 'Ændre vedhæftning',
      editAvatar_title: 'Ændre profilbillede',
      editBoard_title: 'Ændre bræt',
      editDueDate_title: 'Ændre afleveringsfrist',
      editEmail_title: 'Ændre E-mail',
      editLabel_title: 'ændre mærkat',
      editPassword_title: 'Ændre løsen',
      editTimer_title: 'Ændre timer',
      editUsername_title: 'Ændre brugernavn',
      email: 'E-mail',
      emailAlreadyInUse: 'E-mail allerede i brug',
      enterCardTitle: 'Angiv kortets overskrift...',
      enterDescription: 'Angiv beskrivelsen...',
      enterFilename: 'Angiv filnavn',
      enterListTitle: 'Angiv listens overskrift...',
      enterProjectTitle: 'Angiv projektets titel',
      enterTaskDescription: 'Angiv opgavens beskrivelse...',
      filterByLabels_title: 'Filtrer på mærkater',
      filterByMembers_title: 'Filtrer på medlemmer',
      fromComputer_title: 'Fra computer',
      general: 'Generelt',
      hours: 'Timer',
      invalidCurrentPassword: 'Nuværende adgangskode are ugyldig',
      labels: 'Mærkater',
      leaveBoard_title: 'Forlad bræt',
      leaveProject_title: 'Forlad projekt',
      list: 'Liste',
      listActions_title: 'Listens handlinger',
      managers: 'Projektledere',
      members: 'Medlemmer',
      minutes: 'Minutter',
      moveCard_title: 'Flyt kort',
      name: 'Navn',
      newEmail: 'Ny e-mail',
      newPassword: 'Nyt løsen',
      newUsername: 'Nyt brugernavn',
      noConnectionToServer: 'Ingen forbindelse til serveren',
      noBoards: 'Ingen brædder',
      noLists: 'Ingen lister',
      noProjects: 'Ingen projekter',
      notifications: 'Notifikationer',
      noUnreadNotifications: 'Ingen ulæste notifikationer',
      openBoard_title: 'Åben bræt',
      optional_inline: 'valgfri',
      organization: 'Organisation',
      phone: 'Telefon',
      preferences: 'Præferencer',
      pressPasteShortcutToAddAttachmentFromClipboard:
        'Tip: Tryk Ctrl-V (Cmd-V på Mac) for at vedhæfte direkte fra udklipsholder',
      project: 'Projekt',
      projectNotFound_title: 'Projekt ej fundet',
      removeManager_title: 'Fjern projektleder',
      removeMember_title: 'Fjern medlem',
      seconds: 'Sekunder',
      selectBoard: 'Vælg bræt',
      selectList: 'Vælg liste',
      selectProject: 'Vælg projekt',
      settings: 'Indstillinger',
      subscribeToMyOwnCardsByDefault: 'Abonnér på egne kort som standard',
      taskActions_title: 'Opgave handlinger',
      tasks: 'Opgaver',
      time: 'Tid',
      timer: 'Tidsmåler',
      title: 'Overskrift',
      userActions_title: 'Brugerhandlinger',
      userAddedThisCardToList:
        '<0>{{user}}</0><1> tilføjede kortet til {{list}}</1>',
      userLeftNewCommentToCard:
        '{{user}} skrevet en ny kommentar «{{comment}}» på <2>{{card}}</2>',
      userMovedCardFromListToList:
        '{{user}} flyttede <2>{{card}}</2> fra {{fromList}} til {{toList}}',
      userMovedThisCardFromListToList:
        '<0>{{user}}</0><1> flyttede kortet fra {{fromList}} til {{toList}}</1>',
      username: 'Brugernavn',
      usernameAlreadyInUse: 'Brugernavn allerede i brug',
      users: 'Brugere',
      writeComment: 'Skriv en kommentar...',
    },

    action: {
      addAnotherCard: 'Tilføj endnu et kort',
      addAnotherList: 'Tilføj endnu en liste',
      addAnotherTask: 'Tilføj endnu en opgave',
      addCard: 'Tilføj kort',
      addCard_title: 'Tilføj kort',
      addComment: 'Tilføj kommentar',
      addList: 'Tilføj liste',
      addMoreDetailedDescription: 'Tilføj en uddybende beskrivelse',
      addTask: 'Tilføj opgave',
      addToCard: 'Tilføj til kort',
      addUser: 'Tilføj bruger',
      createBoard: 'Opret bræt',
      createFile: 'Opret fil',
      createLabel: 'Opret mærkat',
      createNewLabel: 'Opret nyt mærkat',
      createProject: 'Opret projekt',
      delete: 'Slet',
      deleteAttachment: 'Slet vedhæftning',
      deleteAvatar: 'Slet profilbillede',
      deleteBoard: 'Slet bræt',
      deleteCard: 'Slet kort',
      deleteCard_title: 'Slet kort',
      deleteComment: 'Slet kommentar',
      deleteImage: 'Slet profilbillede',
      deleteLabel: 'Slet mærkat',
      deleteList: 'Slet liste',
      deleteList_title: 'Slet liste',
      deleteProject: 'Slet projekt',
      deleteProject_title: 'Slet projekt',
      deleteTask: 'Slet opgave',
      deleteTask_title: 'Slet opgave',
      deleteUser: 'Slet bruger',
      edit: 'Ændre',
      editDueDate_title: 'Ændre afleveringsfrist',
      editDescription_title: 'Ændre beskrivelse',
      editEmail_title: 'Ændre e-mail',
      editPassword_title: 'Ændre Løsen',
      editTimer_title: 'Ændre tidstager',
      editTitle_title: 'Ændre overskrift',
      editUsername_title: 'Ændre brugernavn',
      leaveBoard: 'Forlad bræt',
      leaveProject: 'Forlad projekt',
      logOut_title: 'Log på',
      makeCover_title: 'Gør til fremhævet billede',
      move: 'Flyt',
      moveCard_title: 'Flyt kort',
      remove: 'Fjern',
      removeBackground: 'Fjern baggrundsbillede',
      removeCover_title: 'Fjern fremhævet billede',
      removeFromBoard: 'Fjern fra bræt',
      removeFromProject: 'Fjern fra projekt',
      removeManager: 'Fjern projektleder',
      removeMember: 'Fjern medlem',
      save: 'Gem ændringer',
      showAllAttachments: 'Vis alle vedhæftninger ({{hidden}} skjulte)',
      showFewerAttachments: 'Vis færre vedhæftninger',
      start: 'Start',
      stop: 'Stop',
      subscribe: 'Abonnér',
      unsubscribe: 'Opsig abonnement',
      uploadNewAvatar: 'Tilføj nyt profilbillede',
      uploadNewImage: 'Tilføj nyt billede',
    },
  },
}
