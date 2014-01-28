function render_waveform(container_id, samples)
{
        // create waveform object
        var test = new Waveform({container: document.getElementById(container_id)});

        //create a gradient
        var ctx = test.context;
        var gradient = ctx.createLinearGradient(0, 0, 0, test.height);
        gradient.addColorStop(0.0, "#f60");
        gradient.addColorStop(1.0, "#ff1b00");
        test.innerColor = gradient;

        // draw the waveform
        test.update({data: samples});
}

function load_example(name)
{
        $('#examples').append($('<h2>' + name + '.json</h2>'));        
        $('#examples').append($('<div class="waveform" id="' + name + '_left">left channel</div>'));
        $('#examples').append($('<div class="waveform" id="' + name + '_right">right channel</div>'));
        $('#examples').append($('<div class="waveform" id="' + name + '_mid">mid channel</div>'));
        $('#examples').append($('<div class="waveform" id="' + name + '_side">side channel</div>'));
        $('#examples').append($('<div class="waveform" id="' + name + '_min">minimum of the channels</div>'));
        $('#examples').append($('<div class="waveform" id="' + name + '_max">maximum of the channels</div>'));
        $('#examples').append($('<div class="seperator"></div>'));

        $.getJSON(name + '.json', function(samples)
        {
                render_waveform(name + '_left' , samples.left);
                render_waveform(name + '_right', samples.right);
                render_waveform(name + '_mid'  , samples.mid);
                render_waveform(name + '_side' , samples.side);
                render_waveform(name + '_min'  , samples.min);
                render_waveform(name + '_max'  , samples.max);
        });
}

$(function(){
    //load_example('test3');
    //load_example('test2');
    load_example('song');
});
