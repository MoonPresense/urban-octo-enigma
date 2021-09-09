module.exports = (text1,
    text2,
    text3,
    image1,
    image2,
    image3,
    name) => {

        return `
        <!doctype html>
        <html>
           <head>
              <meta charset="utf-8">
              <title>PDF Result Template</title>
           </head>
           <body>
              <div class="invoice-box">
                 <table cellpadding="0" cellspacing="0">
                    <tr class="top">
                       <td colspan="2">
                          <table>
                             <tr>
                                <td>
                                    check: ${name}
                                </td>
                                <td>
                                    check: ${text2}
                                </td>
                                <td>
                                    check: ${text3}
                                </td>
                                <td>
                                    check: ${image1}
                                </td>
                                <td>
                                    check: ${image2}
                                </td>
                                <td>
                                    check: ${image3}
                                </td>
                          </table>
                       </td>
                    </tr>
                 </table>
                 <br />
              </div>
           </body>
        </html>
        `;
    };
