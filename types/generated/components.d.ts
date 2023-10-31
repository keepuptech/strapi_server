import type { Schema, Attribute } from '@strapi/strapi';

export interface ExamMarksExamMarks extends Schema.Component {
  collectionName: 'components_exam_marks_exam_marks';
  info: {
    displayName: 'exam-marks';
  };
  attributes: {
    exam: Attribute.Relation<
      'exam-marks.exam-marks',
      'oneToOne',
      'api::exam.exam'
    >;
    subjectMarks: Attribute.Component<'subject-marks.subject-marks', true>;
  };
}

export interface RcHeaderHeader extends Schema.Component {
  collectionName: 'components_rc_header_headers';
  info: {
    displayName: 'header';
    icon: 'cog';
  };
  attributes: {
    school_name: Attribute.String;
    leftimg: Attribute.Media;
  };
}

export interface SubjectMarksSubjectMarks extends Schema.Component {
  collectionName: 'components_subject_marks_subject_marks';
  info: {
    displayName: 'subject-marks';
    description: '';
  };
  attributes: {
    subject: Attribute.Relation<
      'subject-marks.subject-marks',
      'oneToOne',
      'api::subject.subject'
    >;
    marks: Attribute.Decimal;
  };
}

export interface SubjectsSubjects extends Schema.Component {
  collectionName: 'components_subjects_subjects';
  info: {
    displayName: 'subjects';
    description: '';
  };
  attributes: {
    subject: Attribute.Relation<
      'subjects.subjects',
      'oneToOne',
      'api::subject.subject'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'exam-marks.exam-marks': ExamMarksExamMarks;
      'rc-header.header': RcHeaderHeader;
      'subject-marks.subject-marks': SubjectMarksSubjectMarks;
      'subjects.subjects': SubjectsSubjects;
    }
  }
}
