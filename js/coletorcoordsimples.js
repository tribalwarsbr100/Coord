javascript: var win = (window.frames.length > 0) ? window.main : window;
var coords = [];
var outputID = 'villageList';
var encodeID = 'cbBBEncode';
var isEncoded = true;

function fnRefresh()
{
        $("#coord_picker")
                .draggable();
        // win.$('#' + outputID).attr('value', coords.map(function(e)
        // {console.log(isEncoded ? '[coord]' + e + '[\/coord]' : e);
        // return isEncoded ? '[coord]' + e + '[\/coord]' : e;
        // //return 'OK';
        // }
        // ).join(isEncoded ? '\n' : ' '));
        win.$('#' + outputID)
                .text(
                        coords.map(function (e)
                        {
                                return isEncoded ? '[coord]' + e + '[\/coord]' : e;
                        })
                        .join(isEncoded ? '\n' : ' ')
                );
}
win.$(win.document)
        .ready(function ()
        {
                if (win.$('#' + outputID)
                        .length <= 0)
                {
                        if (win.game_data.screen == 'map')
                        {
                                var srcHTML =
                                        '<div id="coord_picker" style="z-index: 105; position: absolute; top: 95px; width: 28%; height: 48%; background-color:#bcce98; background-image: url(http://verdinha.club/wp-content/uploads/2016/08/Maconha-gourmet.jpg); border:3px solid; visibility: visible; cursor:pointer">' +
                                        '<center><hr><a href="https://www.youtube.com/channel/UCIngQdlpQxocFDB4Vk6yERg" target="_blank"><span style=\"color:aqua;\">Youtube Canal Tw100 \</a></hr>' +
                                        '<center><span style="color:magenta;text-decoration:underline;align:center;">Retirar coordenadas do mapa</span><br/><br/>' +
                                        '<center><input type="checkbox" id="cbBBEncode" onClick="isEncoded=this.checked;fnRefresh();"' + (isEncoded ?
                                                'checked' : '') +
                                        '/><span style="color:magenta;text-decoration:underline;align:center;">BB-Codes</span><br/>' +
                                        '<center><input type="radio" id="drag" onClick="drag=this.checked;fnRefresh();"' + (isEncoded ? '' : '') +
                                        '/><span style="color:magenta;text-decoration:underline;align:center;">Soltar (seleccione para soltar esta janela)</span><br/>' +
                                        '<textarea id="' + outputID +
                                        '" cols="40" rows="10"resize="none" value="" onFocus="this.select();"></textarea><br/><input type=button value="Fechar Janela" onClick="document.getElementById(\'coord_picker\').style.display=\'none\'">' +
                                        '</div>';
                                //ele = win.$('body').append(win.$('#villageList').css('background-color', 'red'));
                                ele = win.$('body')
                                        .append(win.$(srcHTML));
                                win.TWMap.map._handleClick = function (e)
                                {
                                        //console.log(e);
                                        var pos = this.coordByEvent(e);
                                        //console.log(pos);
                                        var coord = pos.join("|");
                                        //console.log(coord);
                                        var ii = coords.indexOf(coord);
                                        if (ii >= 0)
                                        {
                                                coords.splice(ii, 1);

                                        }
                                        else
                                        {
                                                coords.push(coord);

                                        }
                                        fnRefresh();
                                        return false;

                                };

                        }
                        else
                        {
                                alert("Iremos Lhe Redirecionar Para o Mapa");
                                self.location = win.game_data.link_base_pure.replace(/screen\=\w*/i, "screen=map");

                        }
                }
        });
void(0);
