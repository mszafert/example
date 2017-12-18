class Skicams {

  div = null;
  result = [];
  today = '';

  constructor() {
    this.div = $('#skicams-container');
    this.getData();
    this.getCurrentDate();
  }

  /**
   * Get data from remote service
   */
  getData() {
    $.ajax({
      url: 'https://makevoid-skicams.p.mashape.com/cams.json',
      type: 'GET',
      dataType: 'json',

      success: function(data) {
        this.processData(data);
      }.bind(this),

      error(err) {
        alert(err);
      },

      beforeSend(xhr) {
        xhr.setRequestHeader(
          'X-Mashape-Authorization',
          'kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw'
        );
      },
    });
  }

  /**
   * Start processing data from remote service
   * @param data - object
   */
  processData(data) {
    Object.keys(data).forEach(key => {
      this.result[data[key].name] = data[key].cams;
    });

    this.displayResult();
  }

  /**
   * Retreive current date
   */
  getCurrentDate() {
    const today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;
    const yyyy = today.getFullYear();

    if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    }

    this.today = `${mm}-${dd}-${yyyy}`;
  }

  /**
   * Rendering remote result
   */
  displayResult() {
    // set particular data
    const data = ['Andalo', 'Monte Bondone'];
    let html = '';

    Object.keys(data).forEach(i => {
      html += `
        <div class="uk-width-medium-1-2">
          <div class="uk-panel-box">
            <div class="uk-panel-badge">${this.today}</div>
            <h3 class="uk-text-center uk-h2">${data[i]}</h3>
      `;

      const item = this.result[data[i]];

      Object.keys(item).forEach(j => {
        html += `<img src="${item[j].url}" alt="${item[j].name}">`;
      });

      html += `
          </div>
        </div>
      `;
    });

    this.div.append(html);
  }
}

export default Skicams;
