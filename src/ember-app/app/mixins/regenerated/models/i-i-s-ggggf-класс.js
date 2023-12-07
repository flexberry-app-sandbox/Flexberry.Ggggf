import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  прикол: DS.attr('date')
});

export let ValidationRules = {
  прикол: {
    descriptionKey: 'models.i-i-s-ggggf-класс.validations.прикол.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КлассE', 'i-i-s-ggggf-класс', {
    прикол: attr('Прикол', { index: 0 })
  });

  modelClass.defineProjection('КлассL', 'i-i-s-ggggf-класс', {
    прикол: attr('Прикол', { index: 0 })
  });
};
