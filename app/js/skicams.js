class Skicams {
  constructor() {
    this.result = [];
    this.today = '';
    this.div = $('#skicams-container') || null;
    this.getData();
    this.getCurrentDate();
  }

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

  processData(data) {
    Object.keys(data).forEach(key => {
      this.result[data[key].name] = data[key].cams;
    });
    this.displayResult();
  }

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

  displayResult() {
    const data = ['Andalo', 'Monte Bondone'];
    const html = [];
    Object.keys(data).forEach(i => {
      html.push('<div class="uk-width-medium-1-2">');
      html.push('<div class="uk-panel-box">');
      html.push(`<div class="uk-panel-badge">${this.today}</div>`);
      html.push('<h3 class="uk-text-center uk-h2">');
      html.push(data[i]);
      html.push('</h3>');
      const item = this.result[data[i]];
      Object.keys(item).forEach(j => {
        html.push('<img src="');
        html.push(item[j].url);
        html.push(`" alt="${item[j].name}">`);
      });
      html.push('</div>');
      html.push('</div>');
    });
    this.div.append(html.join(''));
  }
}

export default Skicams;
