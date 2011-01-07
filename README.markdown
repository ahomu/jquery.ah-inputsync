#jQuery ah-inputsync Plugin

*A plugin sync input value of different elements.*

複数のinput要素(select, textarea含む)の入力値を同期します。CMSをはじめとして、システムの都合で同じ入力を繰り返さざるを得ない場合に有効です。

##使い方 - Usage

サンプルコード:

    <script src="/js/jquery.ah-inputsync/jquery.ah-inputsync.js" type="text/javascript" charset="utf-8"></script>
    <script type="text/javascript">
    $(function()
    {
        $('[class*="js-input_group-"]').ahInputSync({
            groupPrefix : 'js-input_group-'
        });
    });
    </script>

    <form action="" method="get">
    <input type="text" name="strings1" value="" class="js-input_group-hoge" />
    <input type="hidden" name="strings2" value="" class="js-input_group-hoge" />
    <input type="text" name="strings3" value="" class="js-input_group-hoge" />

    <input type="submit" name="submit" value="send" />
    </form>

##クレジット - Credit

Copyright 2011, Ayumu Sato ( http://havelog.ayumusato.com )