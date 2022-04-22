import dateFns from 'date-fns/locale/pl'

export default {
  dateFns,

  format: {
    date: 'd/M/yyyy',
    time: 'p',
    dateTime: '$t(format:date) $t(format:time)',
    longDate: 'd MMM',
    longDateTime: "d MMMM 'o' p",
  },

  translation: {
    common: {
      account: 'Konto',
      actions: 'Akcje',
      addAttachment_title: 'Dodaj Załącznik',
      addComment: 'Dodaj komentarz',
      addMember_title: 'Dodaj Członka',
      addUser_title: 'Dodaj Użytkownika',
      administrator: 'Administrator',
      all: 'Wszyscy',
      allChangesWillBeAutomaticallySavedAfterConnectionRestored:
        'Wszystkie zmiany zostaną automatycznie zapisane<br />po przywróceniu połączenia',
      areYouSureYouWantToDeleteThisAttachment:
        'Jesteś pewien że chcesz usunąć ten załącznik?',
      areYouSureYouWantToDeleteThisBoard:
        'Jesteś pewien że chcesz usunąć tę tablicę?',
      areYouSureYouWantToDeleteThisCard:
        'Jesteś pewien że chcesz usunąć tę kartę?',
      areYouSureYouWantToDeleteThisComment:
        'Jesteś pewien że chcesz usunąć ten komentarz?',
      areYouSureYouWantToDeleteThisLabel:
        'Jesteś pewien że chcesz usunąć to oznaczenie?',
      areYouSureYouWantToDeleteThisList:
        'Jesteś pewien że chcesz usunąć tę listę?',
      areYouSureYouWantToDeleteThisProject:
        'Jesteś pewien że chcesz usunąć ten projekt?',
      areYouSureYouWantToDeleteThisTask:
        'Jesteś pewien że chcesz usunąć to zadanie?',
      areYouSureYouWantToDeleteThisUser:
        'Jesteś pewien że chcesz usunąć tego użytkownika?',
      areYouSureYouWantToRemoveThisMemberFromProject:
        'Jesteś pewien że chcesz usunąć tego członka z projektu?',
      attachment: 'Załącznik',
      attachments: 'Załączniki',
      authentication: 'Uwierzytelnianie',
      board: 'Tablica',
      boardNotFound_title: 'Tablica Nie Znaleziona',
      cardActions_title: 'Akcje Karty',
      cardNotFound_title: 'Karta Nie Znaleziona',
      cardOrActionAreDeleted: 'Karta lub akcja została usunięta',
      color: 'Kolor',
      createBoard_title: 'Utwórz Tablicę',
      createLabel_title: 'Utwórz Oznaczenie',
      createNewOneOrSelectExistingOne:
        'Utwórz nowy lub wybierz<br />istniejący',
      createProject_title: 'Utwórz Projekt',
      createTextFile_title: 'Utwórz Plik Tekstowy',
      currentPassword: 'Aktualne hasło',
      date: 'Data',
      dueDate_title: 'Termin',
      deleteAttachment_title: 'Usuń Załącznik',
      deleteBoard_title: 'Usuń Tablicę',
      deleteCard_title: 'Usuń Kartę',
      deleteComment_title: 'Usuń Komentarz',
      deleteLabel_title: 'Usuń Oznaczenie',
      deleteList_title: 'Usuń Listę',
      deleteProject_title: 'Usuń Projekt',
      deleteTask_title: 'Usuń Zadanie',
      deleteUser_title: 'Usuń Użytkownika',
      description: 'Opis',
      dropFileToUpload: 'Upuść plik aby wgrać',
      editAttachment_title: 'Edytuj Załącznik',
      editAvatar_title: 'Edytuj Avatar',
      editBoard_title: 'Edytuj Tablicę',
      editDueDate_title: 'Edytuj Termin',
      editEmail_title: 'Edytuj E-mail',
      editLabel_title: 'Edytuj Oznaczenie',
      editPassword_title: 'Edytuj Hasło',
      editTimer_title: 'Edytuj Odliczanie',
      editUsername_title: 'Edytuj Nazwę Użytkownika',
      email: 'E-mail',
      emailAlreadyInUse: 'E-mail jest już używany',
      enterCardTitle: 'Podaj tytuł karty...',
      enterDescription: 'Podaj opis...',
      enterFilename: 'Podaj nazwę pliku',
      enterListTitle: 'Podaj tytuł listy...',
      enterProjectTitle: 'Podaj tytuł projektu',
      enterTaskDescription: 'Podaj opis zadania...',
      filterByLabels_title: 'Filtrowanie Po Oznaczeniach',
      filterByMembers_title: 'Filtrowanie Po Członkach',
      fromComputer_title: 'Z komputera',
      hours: 'Godzin',
      invalidCurrentPassword: 'Błędne aktualne hasło',
      labels: 'Oznaczenia',
      list: 'Lista',
      listActions_title: 'Akcje Listy',
      members: 'Członkowie',
      minutes: 'Minut',
      moveCard_title: 'Przenieś Kartę',
      name: 'Nazwa',
      newEmail: 'Nowy e-mail',
      newPassword: 'Nowe hasło',
      newUsername: 'Nowa nazwa użytkownika',
      noConnectionToServer: 'Brak połączenia z serwerem',
      noBoards: 'Brak tablic',
      noLists: 'Brak list',
      noProjects: 'Brak projektów',
      notifications: 'Powiadomienia',
      noUnreadNotifications: 'Brak nieprzeczytanych powiadomień',
      openBoard_title: 'Otwórz Tablicę',
      optional_inline: 'opcjonalny',
      organization: 'Organizacja',
      phone: 'Telefon',
      preferences: 'Preferencje',
      pressPasteShortcutToAddAttachmentFromClipboard:
        'Podpowiedź: naciśnij Ctrl-V (Cmd-V na Macu) aby dodać załącznik ze schowka.',
      project: 'Projekt',
      projectNotFound_title: 'Projekt Nie Znaleziony',
      removeMember_title: 'Usuń Członka',
      seconds: 'Sekund',
      selectBoard: 'Wybierz tablicę',
      selectList: 'Wybierz listę',
      selectProject: 'Wybierz projekt',
      settings: 'Ustawienia',
      subscribeToMyOwnCardsByDefault: 'Zapisz mnie do moich kart automatycznie',
      taskActions_title: 'Akcje Zadania',
      tasks: 'Zadania',
      time: 'Czas',
      timer: 'Odliczanie',
      title: 'Tytuł',
      userActions_title: 'Akcje użytkownika',
      userAddedThisCardToList:
        '<0>{{user}}</0><1> dodał tę kartę w {{list}}</1>',
      userLeftNewCommentToCard:
        '{{user}} zamieścił nowy komentarz «{{comment}}» w <2>{{card}}</2>',
      userMovedCardFromListToList:
        '{{user}} przeniósł <2>{{card}}</2> z {{fromList}} do {{toList}}',
      userMovedThisCardFromListToList:
        '<0>{{user}}</0><1> przeniósł tę kartę z {{fromList}} do {{toList}}</1>',
      username: 'Nazwa Użytkownika',
      usernameAlreadyInUse: 'Nazwa użytkownika jest już używana',
      users: 'Użytkownicy',
      writeComment: 'Napisz komentarz...',
    },

    action: {
      addAnotherCard: 'Dodaj kolejną kartę',
      addAnotherList: 'Dodaj kolejną listę',
      addAnotherTask: 'Dodaj kolejne zadanie',
      addCard: 'Dodaj kartę',
      addCard_title: 'Dodaj Kartę',
      addComment: 'Dodaj komentarz',
      addList: 'Dodaj listę',
      addMoreDetailedDescription: 'Dodaj szczegółowy opis',
      addTask: 'Dodaj zadanie',
      addToCard: 'Dodaj do karty',
      addUser: 'Dodaj użytkownika',
      createBoard: 'Utwórz tablicę',
      createFile: 'Utwórz plik',
      createLabel: 'Utwórz oznaczenie',
      createNewLabel: 'Utwórz nowe oznaczenie',
      createProject: 'Utwórz projekt',
      delete: 'Usuń',
      deleteAttachment: 'Usuń załącznik',
      deleteAvatar: 'Usuń avatar',
      deleteBoard: 'Usuń tablicę',
      deleteCard: 'Usuń kartę',
      deleteCard_title: 'Usuń Kartę',
      deleteComment: 'Usuń komentarz',
      deleteImage: 'Usuń obraz',
      deleteLabel: 'Usuń oznaczenie',
      deleteList: 'Usuń listę',
      deleteList_title: 'Usuń Listę',
      deleteProject: 'Usuń projekt',
      deleteProject_title: 'Usuń Projekt',
      deleteTask: 'Usuń zadanie',
      deleteTask_title: 'Usuń Zadanie',
      deleteUser: 'Usuń użytkownika',
      edit: 'Edytuj',
      editDueDate_title: 'Edytuj Termin',
      editDescription_title: 'Edytuj Opis',
      editEmail_title: 'Edytuj E-mail',
      editPassword_title: 'Edytuj Hasło',
      editTimer_title: 'Edytuj Odliczanie',
      editTitle_title: 'Edytuj Tytuł',
      editUsername_title: 'Edytuj Nazwę Użytkownika',
      logOut_title: 'Wyloguj',
      makeCover_title: 'Stwórz Okładkę',
      move: 'Przenieś',
      moveCard_title: 'Przenieś Kartę',
      remove: 'Usuń',
      removeBackground: 'Usuń tło',
      removeCover_title: 'Usuń Okładkę',
      removeFromProject: 'Usuń z projektu',
      removeMember: 'Usuń członka',
      save: 'Zapisz',
      showAllAttachments: 'Pokaż wszystkie załączniki ({{hidden}} ukryte)',
      showFewerAttachments: 'Pokaż mniej załączników',
      start: 'Start',
      stop: 'Stop',
      subscribe: 'Zapisz się',
      unsubscribe: 'Wypisz się',
      uploadNewAvatar: 'Wgraj nowy avatar',
      uploadNewImage: 'Wgraj nowy obraz',
    },
  },
}
